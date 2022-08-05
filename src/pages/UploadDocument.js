import { BranchSelector } from "../components/BranchSelector";
import { useNavigate } from "react-router-dom";

export const UploadDocument = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirmation", { replace: true });
  };
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
      <button
        style={{ fontSize: "24px", marginTop: "30px" }}
        onClick={handleClick}
      >
        Confirm
      </button>
      {/* <div>
        <BranchSelector />
      </div> */}
    </div>
  );
};
