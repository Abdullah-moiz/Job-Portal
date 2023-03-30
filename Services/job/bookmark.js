export const book_mark_job = async (formData) => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/bookmark`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in bookmark job (service) => ', error);
    }
}


export const get_book_mark_job = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/bookmark?id=${id}`, {
            method: 'GET',
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting bookmark job (service) => ', error);
    }
}



export const delete_book_mark_job = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/bookmark`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(id),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in deleting bookmark job (service) => ', error);
    }
}
