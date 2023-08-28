import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale }
}) {
	const { hello } = await getDictionary(lang);
  return (
    <>
		<h1 className="text-4xl font-extrabold">{hello.world}</h1>
		<Button> Save </Button>
	</>
  )
}
