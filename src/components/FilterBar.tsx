import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {styles} from '../styles/components/FilterBarStyles';
import {TaskStatusFilter} from '../types/task';

type FilterBarProps = {
  searchQuery: string;
  selectedFilter: TaskStatusFilter;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: TaskStatusFilter) => void;
};

const filters: TaskStatusFilter[] = ['all', 'pending', 'completed'];

export function FilterBar({
  searchQuery,
  selectedFilter,
  onSearchChange,
  onFilterChange,
}: FilterBarProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>FILTERS</Text>
      <Text style={styles.heading}>Search and filter</Text>

      <TextInput
        placeholder="Search by title"
        placeholderTextColor="#98a2b3"
        style={styles.input}
        value={searchQuery}
        onChangeText={onSearchChange}
      />

      <View style={styles.filtersRow}>
        {filters.map(filter => {
          const isActive = selectedFilter === filter;

          return (
            <Pressable
              key={filter}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => onFilterChange(filter)}>
              <Text
                style={[
                  styles.filterButtonText,
                  isActive && styles.filterButtonTextActive,
                ]}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
