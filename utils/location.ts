const GOOGLE_API_KEY = 'AIzaSyAdgs6go1kgQ_eSMH6-Ys7qTkLXMR_gsRI';
interface PreviewProps {
  lat: number;
  lng: number;
}

export const getMapPreview = ({ lat, lng }: PreviewProps) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};
