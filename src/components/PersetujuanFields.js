export const PersetujuanFields = ({ onChange, errMsg }) => {
  return (
    <>
      <h4>Persetujuan</h4>
      <div>
        <p className="required">Ketentuan dan Syarat khusus rekening Giro</p>
        <input
          type="checkbox"
          id="ketentuan1"
          name="ketentuanA"
          onChange={onChange}
        />
        <label for="ketentuan1">Ketentuan A</label>
        <br />
        <input
          type="checkbox"
          id="ketentuan2"
          name="ketentuanB"
          onChange={onChange}
        />
        <label for="ketentuan2">Ketentuan B</label>
        <br />
        {errMsg.ketentuan.length > 0 && (
          <span className="error-text">{errMsg.ketentuan}</span>
        )}
      </div>
      <div>
        <p className="required">Syarat Khusus Join Account</p>
        <input
          type="checkbox"
          id="syarat1"
          name="syaratA"
          onChange={onChange}
        />
        <label for="syarat1">Syarat A</label>
        <br />
        <input
          type="checkbox"
          id="syarat2"
          name="syaratB"
          onChange={onChange}
        />
        <label for="syarat2">Syarat B</label>
        <br />
        {errMsg.syarat.length > 0 && (
          <span className="error-text">{errMsg.syarat}</span>
        )}
      </div>
    </>
  );
};
