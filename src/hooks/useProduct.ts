import { useEffect, useState, useRef } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/ProductContextProps';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {


    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);



    const increaseBy = (value: number) => {
        if (initialValues?.maxCount === counter && value > 0) return;
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);

    }, [value])

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, [])

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset
    }

}