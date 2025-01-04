export interface IUser {
    favAlbums: boolean;
    auth: {
        password: string;
        salt: string;
        sessionToken: string;
    },
    spotify: ISpotifyData | null;
    cart: ICart[];
    createdAt: string;
    email: string;
    role: string;
    updatedAt: string;
    wishlist: string[];
    _id: string;
}

export interface ISpotifyData {
    auth: {
        access_token: string;
        refresh_token: string;
        scope: string;
        next_refresh: number;
    },
    favAlbums: {
        next_refresh: number;
        titles: string[];
    };
}

export interface IGuestUser {
    cart: ICart[];
}

export interface ICart {
    id: string;
    quantity: number;
}

export interface ICartProductInfo {
    discount: number;
    images: {
        small: {
            url: string;
            height: number;
            width: number;
        }
    };
    price: number;
    quantity: number;
    quantityInCart: number;
    title: string;
    _id: string;
}

export interface IFilters {
    inputQuery?: string;
    favAlbumsArr?: string[];
    options?: {
        available: boolean;
        discount: boolean;
    },
    genres?: string[];
    price?: {
        min: number;
        max: number;
    },
    sort?: { type: "title" | "release" | "discount" | "price" | "duration", order: "asc" | "desc" };
}

export interface IPageInfo {
    current: number;
    total: number;
}

export interface IProductInfo {
    images: {
        medium: {
            url: string;
            height: number;
            width: number;
        }
    },
    tracks: string[];
    quantity: number;
    _id: string;
    title: string;
    price: number;
    discount: number;
    releaseDate: string;
    fav: boolean | false;
}

export interface ICartProduct {
    title: string;
    price: number;
    _id: string;
}

export interface IProductDetails {
    artists: string[];
    discount: number;
    genres: string[];
    label: string;
    price: number;
    quantity: number;
    releaseDate: string;
    spotifyAlbumId: string;
    title: string;
    tracks: string[];
    _id: string;
    images: {
        large: {
            url: string;
            height: number;
            width: number;
        },
        medium: {
            url: string;
            height: number;
            width: number;
        },
        small: {
            url: string;
            height: number;
            width: number;
        }
    }
}