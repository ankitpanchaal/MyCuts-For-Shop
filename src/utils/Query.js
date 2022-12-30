import { gql } from "@apollo/client";

export const GET_Services = gql`
    query services{
        AllServices{
            id
            title
            offer
            offerDis
            price
            tag
            Image
            ShopID
        }
    }
`;
export const GET_SHOPS = gql`
    query ALLSHOPS{
        AllShopes{
            CloseTime
            description
            email
            id
            Image
            isMan
            isNearest
            isTop
            isWoman
            Location
            OpenTime
            OwnerName
            password
            phone
            Queue
            ShopID
            ShopName
            WaitingTime
            walk
        }
    }
`;

export const Delete_Service = gql`
    mutation DeletService($id: ID!){
        DeletService(id: $id){
            id
            title
            price
            ShopID
    }
}
`;

export const UPDATE_QUEUE = gql`
    mutation DeletService($id: ID!, $Queue: Int){
        UpdateShop(id: $id , Queue: $Queue){
            id
        }
    }

`;

export const ADD_SHOP = gql`
    mutation addShop(
        $shopName: String!,
        $shopID: ID!,
        $phoneNo: String!,
        $email: String!,
        $image: String!,
        $Dis: String!,
        $name: String!,
        $location: String!,
        $Otime: String!,
        $Ctime: String!,
        $password: String!,
    ){
        addShop(
        CloseTime: $Ctime,
        description: $Dis,
        email: $email,
        Image: $image,
        Location: $location,
        OpenTime: $Otime,
        OwnerName: $name,
        password: $password,
        phone: $phoneNo,
        ShopID: $shopID,
        ShopName: $shopName,
        ){
            ShopName
        }
    }
`
export const ADDSERVICE_s = gql`
    mutation addServices(
        $title: String!,
        $description: String!,
        $price: String!,
        $shopID: ID!,
        $image: String!,
        $offer: Boolean!,
        $offerDis: String!,
        $Tag: String!,
    ){
        addServices(
            description: $description,
            Image: $image,
            offer: $offer,
            offerDis: $offerDis,
            price: $price,
            ShopID: $shopID,
            tag: $Tag,
            title: $title
        ){
            description,
            Image
        }
    }
`;