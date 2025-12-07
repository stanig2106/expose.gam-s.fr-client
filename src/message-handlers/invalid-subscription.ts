import InvalidSubscriptionMessage from "../messages/invalid-subscription-message.js";

export default function invalidSubscription(
  _message: InvalidSubscriptionMessage,
): void {
  console.log("Une erreur est survenue, contactez Stani");
  process.exit(1);
}
