import { PortableTextComponents } from "@portabletext/react";
import Text from "@/components/ui/typography/Typography";

export const protableTextSettingsComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <Text tag="h1" variant="super-title">
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Text tag="h2" variant="title">
        {children}
      </Text>
    ),
    h3: ({ children }) => (
      <Text tag="h3" variant="cardTitle">
        {children}
      </Text>
    ),
    h4: ({ children }) => (
      <Text tag="h4" variant="subtitle">
        {children}
      </Text>
    ),
    normal: ({ children }) => (
      <Text tag="p" variant="normal">
        {children}
      </Text>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const { blank, url } = value;
      return (
        <a href={url} target={blank ? "_blank" : ""} rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};
