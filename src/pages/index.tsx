import Page from "@/components/layout/Page";
import { Button } from "@/components/ui/button";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Prime Central London Property Sales and Lettings - Druce"
        description="With headquarters in London and offices in Dubai and Singapore, we have both local knowledge and global reach in luxury residential property"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Welcome to @Druce!
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            How much is your property worth?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'll guarantee you an asking price offer in just 4 weeks or reduce
            your sales fee by 20%.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <a href="#">Contact us</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
