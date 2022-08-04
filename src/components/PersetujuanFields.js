export const PersetujuanFields = () => {
  return (
    <>
      <h4>Persetujuan</h4>
      <div>
        <p>Ketentuan dan Syarat khusu rekening Giro</p>
        <input
          type="checkbox"
          id="ketentuan1"
          name="ketentuan"
          value="Ketentuan A"
        />
        <label for="ketentuan1">Ketentuan A</label>
        <br />
        <input
          type="checkbox"
          id="ketentuan2"
          name="ketentuan"
          value="Ketentuan B"
        />
        <label for="ketentuan2">Ketentuan B</label>
        <br />
      </div>
      <div>
        <p>Syarat Khusus Join Account</p>
        <input type="checkbox" id="syarat1" name="ketentuan" value="Syarat A" />
        <label for="syarat1">Syarat A</label>
        <br />
        <input type="checkbox" id="syarat2" name="ketentuan" value="Syarat B" />
        <label for="syarat2">Syarat B</label>
        <br />
      </div>
    </>
  );
};
