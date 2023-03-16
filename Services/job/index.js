import json from "formidable/src/plugins/json";

export const post_job = async (formData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/postAJob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in post job (service) => ', error);
    }
}


export const get_job = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/getAllJobs`, {
            method: 'GET',
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting job (service) => ', error);
    }
}


export const get_specified_job = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/getSpecifiedJob?id=${id}`, {
            method: 'GET',
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting  specified job (service) => ', error);
    }
}



export const apply_job = async (formData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/applyJob`, {
            method: 'POST',
            body: formData,
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in apply job (service) => ', error);
    }
}
