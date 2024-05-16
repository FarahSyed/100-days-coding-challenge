# Day-76 Task:

## Description
Read and understand the following Visual Guide about DNS and DHCP.

- [What is DNS?](https://roadmap.sh/guides/dns-in-one-picture)
- [What is DHCP?](https://roadmap.sh/guides/dhcp-in-one-picture)

## What is DNS?
DNS (Domain Name System) is a hierarchical and decentralized system used to translate human-friendly domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network. Essentially, DNS acts as the internet's phonebook, enabling users to access websites using domain names instead of numerical IP addresses.

### Key Components of DNS:
1. **Domain Names**: Human-readable addresses (e.g., example.com).
2. **IP Addresses**: Numerical labels assigned to devices on a network.
3. **DNS Servers**: Servers that store DNS records and perform the translation of domain names to IP addresses.
   - **Recursive Resolvers**: Handle the initial query from the user's device and interact with other DNS servers to find the correct IP address.
   - **Root Name Servers**: The first step in translating domain names into IP addresses, directing queries to the appropriate TLD servers.
   - **Top-Level Domain (TLD) Servers**: Handle queries for specific domain extensions (like .com, .org) and direct them to the authoritative name servers.
   - **Authoritative Name Servers**: Contain the actual DNS records for domain names and provide the final IP address for the queried domain.

### How DNS Works:
1. **User Query**: A user types a domain name into their browser.
2. **Recursive Resolver**: The request is sent to a recursive DNS resolver, which begins the process of finding the IP address.
3. **Root Server**: The resolver queries a root server, which directs it to the appropriate TLD server.
4. **TLD Server**: The resolver then queries the TLD server, which directs it to the authoritative name server for the specific domain.
5. **Authoritative Server**: The authoritative server responds with the IP address for the domain name.
6. **IP Address**: The resolver returns the IP address to the user's device, which can then connect to the website.  
  
  
## What is DHCP?
DHCP (Dynamic Host Configuration Protocol) is a network management protocol used to automate the process of configuring devices on IP networks. It assigns IP addresses and other network configuration parameters dynamically, allowing devices to communicate on an IP network without manual configuration.

### Key Components of DHCP:
1. **DHCP Server**: Assigns IP addresses and other network configuration parameters to devices on the network.
2. **DHCP Client**: Any device that connects to the network and requests configuration parameters from the DHCP server.
3. **IP Address Pool**: A range of IP addresses that the DHCP server can assign to clients.
4. **Lease Time**: The duration for which an IP address is assigned to a device. After the lease time expires, the IP address can be reassigned to another device if not renewed.

### How DHCP Works:
1. **DHCP Discovery**: When a device connects to a network, it broadcasts a DHCPDISCOVER message to find available DHCP servers.
2. **DHCP Offer**: DHCP servers on the network respond with a DHCPOFFER message, offering an IP address and other network configuration settings.
3. **DHCP Request**: The device responds with a DHCPREQUEST message, indicating that it accepts the offer and requesting the provided IP address.
4. **DHCP Acknowledgment**: The DHCP server confirms the assignment with a DHCPACK message, and the device is configured with the IP address and other settings.
5. **Lease Renewal**: The device must periodically renew its lease on the IP address by sending a DHCPREQUEST message to the server before the lease expires.

By understanding DNS and DHCP, you can better manage and troubleshoot network configurations, ensuring efficient and reliable communication between devices on an IP network.