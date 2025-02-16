import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
 
class formData extends LitWithoutShadowDom {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <div class="py-5">
        <form class="row g-3 was-validated" id="addRecordForm" novalidate>
          <div class="col-12 col-md-6">
            <label for="validationCustomRecordName" class="form-label">Deskripsi</label>
              <input type="text" class="form-control" id="validationCustomRecordName" required />
            <div class="invalid-feedback">Wajib diisi</div>
          </div>
          <div class="col-12 col-md-6">
            <label for="validationCustomAmount" class="form-label">Gambar/Foto</label>
            <div class="input-group has-validation">
              <input
                type="file"
                accept="image/*"
                class="form-control"
                id="validationCustomAmount"
                aria-describedby="inputImage"
                required
              />
              <div class="invalid-feedback">Wajib diisi</div>
            </div>
          </div>
            
          <div class="col-12 text-end">
            <button class="btn btn-dark btn-border-radius-sm" type="submit">Submit</button>
          </div>
        </form>
      </div>
    `;
  }
}
 
customElements.define('form-section', formData);