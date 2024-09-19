import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export default function DocsBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/ai-tools" passHref legacyBehavior>
              <BreadcrumbLink>AI Tools</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          {paths.map((path, index) => (
            <Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index < paths.length - 1 ? (
                  <Link href={`/ai-tools/${paths.slice(0, index + 1).join('/')}`} passHref legacyBehavior>
                    <BreadcrumbLink>{toTitleCase(path)}</BreadcrumbLink>
                  </Link>
                ) : (
                  <BreadcrumbPage>{toTitleCase(path)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function toTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}