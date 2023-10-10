import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "category"]{
    _id,
        ...      
    }`;

type Data = {
    categories: Category[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const categories = await sanityClient.fetch(query)
    console.log(categories)
    res.status(200).json({categories});
}

// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//     name: string
// }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ){
//     res.status(200).json({ name: 'John Doe '})
// }