import axios from "axios";

export const imageUpload = async image => {
    // because you have to upload the image as a form thats why we use the FormData() function
    const formData = new FormData();
    formData.append('image', image)

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=
                ${import.meta.env.VITE_IMAGGE_HOSTING_KEY}`,
        formData
    )
    return data;
}