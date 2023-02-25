import supabase from './supabaseClient';
import { decode } from 'base64-arraybuffer';

const uploadImage = async (base64Image) => {
  const imageExtension = 'jpg',
    bucketName = 'images';
  try {
    const base64Str = base64Image.includes('base64,')
      ? base64Image.substring(base64Image.indexOf('base64,') + 'base64,'.length)
      : base64Image;
    const res = decode(base64Str);

    if (!(res.byteLength > 0)) {
      console.error('[uploadToSupabase] ArrayBuffer is null');
      return null;
    }

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(`${Date.now()}.${imageExtension}`, res, {
        contentType: `image/${imageExtension}`,
      });

    if (!data) {
      console.error('[uploadToSupabase] Data is null');
      return null;
    }

    if (error) {
      console.error('[uploadToSupabase] upload: ', error);
      return null;
    }
    const { data: publicURL, error: urlError } = supabase.storage
      .from(bucketName)
      .getPublicUrl(data.path);

    if (urlError) {
      console.error('[uploadToSupabase] PublicURL: ', urlError);
      return null;
    }

    if (!publicURL) {
      console.error('[uploadToSupabase] publicURL is null');
      return null;
    }

    return publicURL;
  } catch (err) {
    console.error(err);
    return null;
  }
};

async function downloadImage({ fileName }) {
  return supabase.storage.from('images').download(fileName);
}

const Storage = {
  uploadImage,
  downloadImage,
};

export default Storage;
