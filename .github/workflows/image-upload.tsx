import { useState, ChangeEvent } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "./ui/button";

interface ImageUploadProps {
  onImageSelect?: (file: File, preview: string) => void;
  maxSize?: number; // in MB
}

export function ImageUpload({ onImageSelect, maxSize = 5 }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset error
    setError("");

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar");
      return;
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`Ukuran file maksimal ${maxSize}MB`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      if (onImageSelect) {
        onImageSelect(file, result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setError("");
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#7DA5B8] transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className="size-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">
              Klik untuk upload gambar
            </p>
            <p className="text-sm text-gray-400">
              PNG, JPG, GIF maksimal {maxSize}MB
            </p>
          </label>
        </div>
      ) : (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-auto rounded-lg"
          />
          <Button
            onClick={handleRemove}
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
          >
            <X className="size-4" />
          </Button>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
