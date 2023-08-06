// upload image in Immge imgbb

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const uri = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_imgbb_Key
  }`;

  const response = await fetch(uri, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
