#tidyverse: For data manipulation and visualization.
#tidytext: For text mining and sentiment analysis.
#textdata: Provides sentiment lexicons (e.g., AFINN, Bing, NRC).
#sentimentr: For sentence-level sentiment analysis.
#tm: For text mining tasks like preprocessing.
#wordcloud: For visualizing word frequencies (optional but fun).

install.packages("devtools")
devtools::install_github("r-lib/conflicted")
# load required packages
library(tidyverse)
library(syuzhet)
library(tidytext)

# import text dataset
df <- read.csv("C:/Suchi/Sentimental_analysis/restaurants_reviews.csv")
text.df <- tibble(text = str_to_lower(df$reviews_list))

# analyze sentiments using the syuzhet package based on the NRC sentiment dictionary
emotions <- get_nrc_sentiment(text.df$text)
emo_bar <- colSums(emotions)
emo_sum <- data.frame(count=emo_bar, emotion=names(emo_bar))

# create a barplot showing the counts for each of eight different emotions and positive/negative rating
ggplot(emo_sum, aes(x = reorder(emotion, -count), y = count)) + 
  geom_bar(stat = 'identity') 


# sentiment analysis with the tidytext package using the "bing" lexicon
bing_word_counts <- text.df %>% unnest_tokens(output = word, input = text) %>%
  inner_join(get_sentiments("bing")) %>%
  count(word, sentiment, sort = TRUE) 

# select top 10 words by sentiment
bing_top_10_words_by_sentiment <- bing_word_counts %>% 
  group_by(sentiment) %>% 
  slice_max(order_by = n, n = 10) %>% 
  ungroup() %>% 
  mutate(word = reorder(word, n)) 
bing_top_10_words_by_sentiment

# create a barplot showing contribution of words to sentiment
bing_top_10_words_by_sentiment %>% 
  ggplot(aes(word, n, fill = sentiment)) + 
  geom_col(show.legend = FALSE) + 
  facet_wrap(~sentiment, scales = "free_y") + 
  labs(y = "Contribution to sentiment", x = NULL) + 
  coord_flip() 


# sentiment analysis with the tidytext package using the "loughran" lexicon
loughran_word_counts <- text.df %>% unnest_tokens(output = word, input = text) %>%
  inner_join(get_sentiments("loughran")) %>%
  count(word, sentiment, sort = TRUE) 

# select top 10 words by sentiment
loughran_top_10_words_by_sentiment <- loughran_word_counts %>% 
  group_by(sentiment) %>% 
  slice_max(order_by = n, n = 10) %>% 
  ungroup() %>%
  mutate(word = reorder(word, n))
loughran_top_10_words_by_sentiment

# create a barplot showing contribution of words to sentiment
loughran_top_10_words_by_sentiment %>% 
  ggplot(aes(word, n, fill = sentiment)) + 
  geom_col(show.legend = FALSE) + 
  facet_wrap(~sentiment, scales = "free_y") + 
  labs(y = "Contribution to sentiment", x = NULL) + 
  coord_flip() 
