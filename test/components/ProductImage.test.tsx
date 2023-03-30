import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components/';
import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  test('Debe renderizarse', () => {
    const wrapper = renderer.create(<ProductImage img="prueba.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
