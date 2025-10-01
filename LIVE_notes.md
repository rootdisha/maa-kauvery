####### Going LIVE on 2 Oct 2025 #######

##### Deployments (Vercel)

LIVE before go live at 12 pm 2 oct (coming soon):  https://vercel.com/disha-mockup/maa-kauvery-live/2ZjSXWaJZvgrqwnek3eRH1eVJYLC

site without reviewed content ready to go live/be promoted to production at 12 pm: https://vercel.com/disha-mockup/maa-kauvery-live/83wWVWFjkix4RND5vUp8yvBW7dvv

site WITH reviewed content ready to go live/be promoted post 12 pm:


##### LINKS

vercel 
https://vercel.com/disha-mockup/maa-kauvery-live
godaddy 
https://sso.godaddy.com 
domain address 
https://maakauveryfertility.in

##### STEPS IN GODADDY

1 Log into GoDaddy
2 Go to your domain → DNS Management or Manage DNS
3 Find and delete the conflicting A and CNAME records mentioned above
4 Click Add → Select record type (A or CNAME)
5 Enter the values exactly as shown below
6 Save each record



##### ADD
1. A Record (for apex domain)

Type: A
Name: @ (or leave blank for root domain)
Value: 216.198.79.1
TTL: Default (or 600 seconds)

2. CNAME Record (for www subdomain)

Type: CNAME
Name: www
Value: 9e75c5532657f8c56.vercel-dns.com.
TTL: Default (or 600 seconds)


##### DELETE
see hand notes


##### WAIT

Important Notes:

- DNS propagation can take 24-48 hours, but usually completes within a few hours
- After saving in GoDaddy, go back to Vercel and click Refresh to verify
- The CNAME value should include the trailing dot if GoDaddy's interface accepts it