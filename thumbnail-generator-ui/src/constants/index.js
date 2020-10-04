export const Text = {
  general: {
    siteTitle: 'Thumbnail',
  },
  nav: {
    images: 'Images',
    user: 'My account',
  },
  uploadFile: {
    clear: 'Clear',
    upload: 'Upload Files',
    fromUrl: 'From URL',
    dragImages: 'Drag and drop image here...',
    getUrlImage: 'Done',
    errorMessage: 'There was a problem with your file. Allowed types: jpeg & png. File max size 5mb.'
  },
  generateThumbnail: {
    return: 'Return',
    done: 'Done',
    download: 'Download',
  },
  fileSection: {
    title: 'Files',
  },
};

export const Testing = {
  imageUrl:
    'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
};

export const ImageSizes = [
  { width: 400, height: 300, label: '400x300' },
  { width: 160, height: 120, label: '160x120' },
  { width: 120, height: 120, label: '120x120' },
];

export const imageSettings = {
  maxSize: 5000000, // 5mb in bytes
  allowedTypes: ['image/png', 'image/jpeg'],
};
