

export const fileUpload = async ( file ) => {
    if ( !file ) throw new Error('No hay archivos a suvir')
    
    const clientURL = 'https://api.cloudinary.com/v1_1/dqdynwx7b/upload'
    const formData = new FormData()

    formData.append( 'upload_preset', 'react-journal')
    formData.append( 'file', file )

    try {
        const resp = await fetch( clientURL, {
            method: 'POST',
            body: formData
        })

        if ( !resp.ok ) throw new Error('No fue posible subir la imagen')

        const cloudRespont = await resp.json()
        return cloudRespont.secure_url
    } catch (error) {
        throw new Error( error.message )
    }
}