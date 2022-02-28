import {BasePage} from "../BasePage";

const TOKEN_LISTED_STATUS = "[data-cy=token-listed-status] span"

export class TokenPage extends BasePage {

  static validateListedTokenStatus(text:string) {
    this.containsText(TOKEN_LISTED_STATUS,text)
  }

}
