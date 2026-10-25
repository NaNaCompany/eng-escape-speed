# Publisher integrations: source presence and duplicate-load review

Review date: 2026-10-25. Read-only review; no application source, tag, Google Tag Manager setting or Analytics setting changed.

## Finding

The intended four integrations are present in the new escape-speed app: Google Tag Manager, the direct Google Analytics 4 Google tag, AdSense, and Cloudflare Web Analytics. Source presence and loaded scripts do not establish successful Analytics delivery or advertising measurement.

The root agent observed one GTM script, two `gtag/js` scripts for the same GA4 measurement ID, one AdSense script and one Cloudflare beacon in the runtime DOM. That is five external script elements for four integration families. The duplicate-looking Google library elements alone do not prove two page-view events. They also do not establish that the implementation is free of duplicate configuration.

The two sanitized Google library queries differ: the source-authored one has only the destination `id`; the additional runtime element has the same `id` plus `cx=c` and a `gtm` value. This is consistent with an additional Google-managed runtime/helper load, but those query parameters alone do not document which configuration executed or how many events were sent. Their internal meaning is not asserted as a supported public API.

## Read-only evidence

- `eng-escape-speed/index.html` contains one GTM bootstrap for the publisher container, one direct `gtag/js` script for the publisher GA4 destination, one explicit `gtag('config', …)` call, the AdSense loader, and a Cloudflare beacon fallback that first checks whether a beacon script already exists.
- The public publisher GTM container script returned HTTP 200. Parsing its public `resource` object found **0 resource tags**, **5 macros**, and no literal occurrence of the app's GA4 measurement ID. This snapshot therefore supplies no positive evidence that this GTM container configures the same GA4 destination a second time. Public code is dynamic; this is a snapshot, not a complete account-settings audit.
- The public direct `gtag/js` response returned HTTP 200. Its resource metadata includes the GA destination and automatic page-view feature templates. Template presence shows available configuration, not a delivered or received event count.
- Only aggregate metadata was inspected or reported. Full container code, visitor identifiers, cookies and Analytics events were not persisted.

## Official behavior and interpretation

Google documents that `config` should be called once per Google tag. A GA4 configuration normally sends an automatic page view unless `send_page_view` is disabled. Therefore a second independently executed configuration for the same destination can create a duplicate-page-view risk. [Google tag configuration](https://developers.google.com/tag-platform/gtagjs/configure), [GA4 page-view measurement](https://developers.google.com/analytics/devguides/collection/ga4/views).

Google also explicitly warns that configuring the same Google tag multiple times may produce duplicate data or mixed settings; its management interface can suppress duplicate on-page configuration commands. That setting was not inspected here. [Google tag management](https://support.google.com/analytics/answer/12329709?hl=en).

One Google tag library can serve multiple destinations, and a tag may have multiple associated IDs. Script elements, tag IDs, configuration executions and received Analytics events are different quantities. This is why counting `gtag/js` elements cannot establish the number of page views. [Google tag API reference](https://developers.google.com/tag-platform/gtagjs/reference).

The extra Google script could come from a Google-managed helper/destination load or another dynamic integration. Its initiator and actual event requests have not been inspected in this review, so that origin remains unconfirmed. The public GTM metadata above does not justify attributing it to a second GA4 tag inside GTM.

## Verification still needed for duplicate collection

Inspect Tag Assistant or a clean page-load network trace and count successful GA4 collection requests for the intended destination with event name `page_view`. Examine the request initiator, configuration executions, consent behavior, and the destination's duplicate-config setting together. A single clean navigation should be assessed separately from history-change page views. Analytics DebugView or report readback would then confirm receipt where account access is available.

No Analytics collection requests, Tag Assistant session, destination account settings, DebugView or Analytics reports were inspected in this review. **Actual duplicate collection is neither confirmed nor ruled out.** No tag should be removed solely because two library script elements were observed.

The root agent separately rechecked all 100 public representative pages and 600 local language HTML files for the intended four integration families. Those source-presence checks passed. It also dismissed the mobile advertising modal using its close control and confirmed that calculator state remained functional. These checks substantiate integration presence and app behavior; they do not establish Analytics event delivery.
