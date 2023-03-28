# SEL-Product-Card

Este es un paquete de pruebas para desplegar en npm.

### Santiago Echavarria Londoño

## Ejemplo de uso

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'sel-product-card';

```


```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>

```
