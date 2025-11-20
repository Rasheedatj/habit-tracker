import { Place } from '@/models/places';

export const placesData = [
  new Place({
    id: 'p1',
    title: 'Lekki Conservation Centre',
    imageUri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    address: 'Lekki, Lagos, Nigeria',
    location: { lat: '6.4414', lng: '3.5363' },
  }),

  new Place({
    id: 'p2',
    title: 'Nike Art Gallery',
    imageUri: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    address: 'Lekki Phase 1, Lagos, Nigeria',
    location: { lat: '6.4410', lng: '3.4737' },
  }),

  new Place({
    id: 'p3',
    title: 'Jabi Lake Mall',
    imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    address: 'Jabi, Abuja, Nigeria',
    location: { lat: '9.0579', lng: '7.4584' },
  }),

  new Place({
    id: 'p4',
    title: 'Eleko Beach',
    imageUri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    address: 'Ibeju-Lekki, Lagos, Nigeria',
    location: { lat: '6.4420', lng: '3.6008' },
  }),

  new Place({
    id: 'p5',
    title: 'Olumo Rock',
    imageUri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    address: 'Abeokuta, Ogun State, Nigeria',
    location: { lat: '7.1608', lng: '3.3499' },
  }),
];
