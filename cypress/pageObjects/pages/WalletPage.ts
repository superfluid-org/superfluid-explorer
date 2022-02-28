import {BasePage} from "../BasePage";

const ACCOUNT_TYPE = "[data-cy=account-type] span"
const BORDER_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarBorderIcon]"
const FILLED_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarIcon]"
const INCOMMING_TOKENS = "[data-field=token] a"
const NETWORK_NAME = "[data-cy=network-name] div"
const WALLET_ADDRESS = "[data-cy=address] div"

export class WalletPage extends BasePage {

  static clickAddressBookButton() {
    this.click(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static addressBookButtonIsFilled(){
    this.doesNotExist(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
    this.isVisible(FILLED_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static validateWalletAddressTypeAndNetwork(network: string) {
    cy.fixture("walletData").then(wallet => {
      this.hasText(ACCOUNT_TYPE,wallet[network].accountType)
      this.hasText(WALLET_ADDRESS,wallet[network].address)
      this.hasText(NETWORK_NAME,wallet[network].networkFancyName)
    })
  }

}
