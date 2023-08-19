import { useToast } from "@sanity/ui";

export function improvedPublishAction(originalPublishAction: any) {
  const toast = useToast();

  const BetterAction = (props: any) => {
    const originalResult = originalPublishAction(props);
    return {
      ...originalResult,
      onHandle: () => {
        // Add our custom functionality
        toast.push({
          status: "info",
          title: "It may take up to 10 minutes before website update!",
        });
        // then delegate to original handler
        originalResult.onHandle();
      },
    };
  };
  return BetterAction;
}
