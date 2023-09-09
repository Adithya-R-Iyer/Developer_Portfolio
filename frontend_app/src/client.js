import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: '3evry5ki',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    try {
        return builder.image(source);
    } catch (error) {
        console.error("Error generating image URL:", error);
        return ""; // Return a default or empty URL
    }
}

