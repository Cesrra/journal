/* eslint-disable react/prop-types */
import { ImageList, ImageListItem } from "@mui/material";


const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImageGallery = ({ images }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      variant="quilted"
      cols={6}
      rowHeight={121}
    >
      {images.map((item, index) => (
        <ImageListItem key={item} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item, 121, item.rows, item.cols)}
            alt={`Esta es la imagen ${index+1} de la nota`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
