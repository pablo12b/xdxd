package ec.edu.ups.ppw63.demo63.business;

import java.util.List;

import ec.edu.ups.ppw63.demo63.dao.ProductoDAO;
import ec.edu.ups.ppw63.demo63.model.Producto;
import io.opentracing.Scope;
import io.opentracing.Span;
import io.opentracing.Tracer;
import io.opentracing.util.GlobalTracer;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;

@Stateless
public class GestionProductos {

    @Inject
    private ProductoDAO daoProducto;

    private final Tracer tracer = GlobalTracer.get();

    public void guardar(Producto producto) {
        Span span = tracer.buildSpan("guardar").start();
        try (Scope scope = tracer.scopeManager().activate(span)) {
            daoProducto.insert(producto);
        } catch (Exception e) {
            span.log(e.getMessage());
            throw e;
        } finally {
            span.finish();
        }
    }

    public void actualizar(Producto producto) {
        Producto productoExistente = daoProducto.read(producto.getCodigo());
        Span span = tracer.buildSpan("actualizar").start();
        try (Scope scope = tracer.scopeManager().activate(span)) {
            if (productoExistente != null) {
                productoExistente.setNombre(producto.getNombre());
                productoExistente.setDescripcion(producto.getDescripcion());
                productoExistente.setPrecio(producto.getPrecio());

                daoProducto.update(productoExistente);
            } else {
                System.out.println("Producto no encontrado");
            }
        } catch (Exception e) {
            span.log(e.getMessage());
            throw e;
        } finally {
            span.finish();
        }
    }

    public void borrar(int codigo) {
        Producto producto = daoProducto.read(codigo);
        Span span = tracer.buildSpan("eliminar").start();
        try {
            try (Scope scope = tracer.scopeManager().activate(span)) {
                if (producto != null) {
                    daoProducto.remove(producto.getCodigo());
                } else {
                    System.out.println("No existe");
                }
            } catch (Exception s) {
                s.printStackTrace();
            }
        } catch (Exception e) {
            span.log(e.getMessage());
            throw e;
        } finally {
            span.finish();
        }
    }

    public List<Producto> getProductos() {
        Span span = tracer.buildSpan("listar").start();
        try {
            try (Scope scope = tracer.scopeManager().activate(span)) {
                return daoProducto.getAll();
            } catch (Exception ex) {
                span.log(ex.getMessage());
                throw ex;
            } finally {
                span.finish();
            }
        } catch (Exception e) {
            return null;
        }
    }
}
