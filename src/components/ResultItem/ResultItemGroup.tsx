import * as React from 'react';
import { ItemGroup } from '@atlaskit/item';
import { ResultItemGroupTitle, ResultItemGroupHeader } from './styled';

type Props = {
  /** Text to appear as heading above group. Will be auto-capitalised. */
  title: React.ReactNode;
  /** React Elements to be displayed within the group. This should generally be a collection of ResultItems. */
  children?: React.ReactNode;
};

export default class ResultItemGroup extends React.Component<Props> {
  render() {
    const { title, children } = this.props;

    const wrappedTitle = (
      <ResultItemGroupHeader className="ak-result-item-group-header">
        <ResultItemGroupTitle className="ak-result-item-group-title">
          {title}
        </ResultItemGroupTitle>
      </ResultItemGroupHeader>
    );

    return (
      <ItemGroup title={wrappedTitle} className="ak-result-item-group">
        {children}
      </ItemGroup>
    );
  }
}
