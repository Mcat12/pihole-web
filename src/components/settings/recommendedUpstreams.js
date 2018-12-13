/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Web Interface
*  Recommended Upstream DNS Servers
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */

/**
 * A list of recommended upstream DNS servers. Each item has primary and
 * secondary IPv4 and IPv6 server entries. Some addresses may be empty.
 */
export const recommendedUpstreams = [
  {
    name: "OpenDNS (ECS)",
    primaryIpv4: "208.67.222.222",
    secondaryIpv4: "208.67.220.220",
    primaryIpv6: "2620:0:ccc::2",
    secondaryIpv6: "2620:0:ccd::2"
  },
  {
    name: "Google (ECS)",
    primaryIpv4: "8.8.8.8",
    secondaryIpv4: "8.8.4.4",
    primaryIpv6: "2001:4860:4860:0:0:0:0:8888",
    secondaryIpv6: "2001:4860:4860:0:0:0:0:8844"
  },
  {
    name: "Quad9 (filtered, DNSSEC)",
    primaryIpv4: "9.9.9.9",
    secondaryIpv4: "149.112.112.112",
    primaryIpv6: "2620:fe::fe",
    secondaryIpv6: "2620:fe::9"
  },
  {
    name: "Quad9 (unfiltered, no DNSSEC)",
    primaryIpv4: "9.9.9.10",
    secondaryIpv4: "149.112.112.10",
    primaryIpv6: "2620:fe::10",
    secondaryIpv6: "2620:fe::fe:10"
  },
  {
    name: "Quad9 (filtered + ECS)",
    primaryIpv4: "9.9.9.11",
    secondaryIpv4: "149.112.112.11",
    primaryIpv6: "2620:fe::11",
    secondaryIpv6: ""
  },
  {
    name: "Cloudflare (ECS)",
    primaryIpv4: "1.1.1.1",
    secondaryIpv4: "1.0.0.1",
    primaryIpv6: "2606:4700:4700::1111",
    secondaryIpv6: "2606:4700:4700::1001"
  },
  {
    name: "Level3",
    primaryIpv4: "4.2.2.1",
    secondaryIpv4: "4.2.2.2",
    primaryIpv6: "",
    secondaryIpv6: ""
  },
  {
    name: "Comodo",
    primaryIpv4: "8.26.56.26",
    secondaryIpv4: "8.20.247.20",
    primaryIpv6: "",
    secondaryIpv6: ""
  },
  {
    name: "DNS.WATCH",
    primaryIpv4: "84.200.69.80",
    secondaryIpv4: "84.200.70.40",
    primaryIpv6: "2001:1608:10:25:0:0:1c04:b12f",
    secondaryIpv6: "2001:1608:10:25:0:0:9249:d69b"
  }
];

/**
 * The recommended servers, but with an entry for each address. This is used
 * when displaying the servers in a list.
 */
export const recommendedUpstreamOptions = recommendedUpstreams.flatMap(
  upstream => {
    // Parse the upstream address information into the new format
    const parseUpstream = (address, order, type) => ({
      label: upstream.name + " " + order + " " + type + " (" + address + ")",
      address
    });

    let parsedUpstreams = [];

    if (upstream.primaryIpv4.length > 0) {
      parsedUpstreams.push(
        parseUpstream(upstream.primaryIpv4, "Primary", "IPv4")
      );
    }

    if (upstream.secondaryIpv4.length > 0) {
      parsedUpstreams.push(
        parseUpstream(upstream.secondaryIpv4, "Secondary", "IPv4")
      );
    }

    if (upstream.primaryIpv6.length > 0) {
      parsedUpstreams.push(
        parseUpstream(upstream.primaryIpv6, "Primary", "IPv6")
      );
    }

    if (upstream.secondaryIpv6.length > 0) {
      parsedUpstreams.push(
        parseUpstream(upstream.secondaryIpv6, "Secondary", "IPv6")
      );
    }

    return parsedUpstreams;
  }
);
