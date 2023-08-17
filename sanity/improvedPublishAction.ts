export function improvedPublishAction(originalPublishAction: any) {
  const BetterAction = (props: any) => {
    const originalResult = originalPublishAction(props);
    return {
      ...originalResult,
      onHandle: () => {
        // Add our custom functionality
        window.alert(
          "👋 It may take up to 5 minutes Before website reflects this change!"
        );
        // then delegate to original handler
        originalResult.onHandle();
      },
    };
  };
  return BetterAction;
}
