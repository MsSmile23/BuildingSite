export type HouseType = {
    id?: number;
    name?: string;
    size?: number;
    material?: string;
    pointX: string;
    pointY: string;
    about?: string;
    photoSrc: [{
        id?: number;
        photo: string;
        houseId?: number;
    }];
}

export type PhotoUnder = {
    id?: number;
    photo: string;
    userId: number;
}