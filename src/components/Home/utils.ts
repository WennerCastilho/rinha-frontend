type ReadJSONType = { jsonParsed: object } | { error: boolean }

export const readJSON = async (file: File) => {
  const jsonParsed: ReadJSONType = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target!.result as string
        resolve(JSON.parse(result));
      } catch (error) {
        resolve({ error: true });
      }
    };
    reader.readAsText(file);
  });
  return { jsonParsed }
}
