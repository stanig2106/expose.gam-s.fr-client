import DomainAlreadyReserved from "../messages/domain-already-reserved";

export default function domainAlreadyReserved(message: DomainAlreadyReserved) {
    console.info(
        `The domain ${message.subdomain}.e.gam-s.fr is already reserved by another user. Please choose a different subdomain. Falling back to a random subdomain`
    );
}
