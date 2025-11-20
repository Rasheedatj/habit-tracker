import { PlaceProp } from '@/types';

export class Place {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: string; lng: string };
  constructor({ id, title, imageUri, address, location }: PlaceProp) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
