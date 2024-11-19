import { IFilters } from "../interfaces/interfaces";

// Function to set URL parameters based on the filters object
export const setFilterParams = (filters: IFilters | null, page: number) => {
    const params: URLSearchParams = new URLSearchParams();

    page && params.set('page', page.toString());
    filters?.inputQuery && params.set('inputQuery', filters.inputQuery);
    filters?.options?.available && params.set('options[available]', filters.options.available.toString());
    filters?.options?.discount && params.set('options[discount]', filters.options.discount.toString());
    filters?.genres?.length && filters.genres.forEach((genre) => params.append('genres[]', genre));

    filters?.price?.min && params.set('price[min]', filters?.price.min.toString());
    filters?.price?.max && params.set('price[max]', filters?.price.max.toString());

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
}

// Function to get URL parameters and return them as an object
export const getFilterParams = (): IFilters => {
    const params = new URLSearchParams(window.location.search);
    const filters: IFilters = {
        inputQuery: params.get('inputQuery') || '',
        options: {
            available: params.get('options[available]') === 'true',
            discount: params.get('options[discount]') === 'true',
        },
        genres: params.getAll('genres[]'),
        price: {
            min: parseInt(params.get('price[min]') || '0'),
            max: parseInt(params.get('price[max]') || '0'),
        }
    }

    return filters;
}