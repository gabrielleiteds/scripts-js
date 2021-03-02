class companyBuilder {
  static aCompany() {
    return new companyBuilder()
  }

  #company = {
    name: 'any_company_name',
    ownerId: null
  } 
  

  build() {
    return this.#company
  }

  newValues(company) {
    this.#company = Object.assign(
      this.#company,
      company
    )
    return this
  }
}

module.exports = companyBuilder
