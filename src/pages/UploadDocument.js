import { BranchSelector } from "../components/BranchSelector";

export const UploadDocument = () => {
  return (
    <div>
      <h3>Upload Dokumen</h3>
      <div>
        <form action="upload.php" method="post">
          Select file to upload:
          <input type="file" name="fileToUpload" id="fileToUpload" />
          <input type="submit" value="Upload Image" name="submit" />
        </form>
      </div>
      {/* <div>
        <BranchSelector />
      </div> */}
    </div>
  );
};
