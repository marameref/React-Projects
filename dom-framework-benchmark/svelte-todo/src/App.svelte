<script>
	let taskName = "";
	let priority = "Low";
	let tasks = [];

	let renderTime = 0;
	let updateTime = 0;
	let deleteTime = 0;

	function addTask() {
		if (!taskName.trim()) {
			alert("Please enter a task name.");
			return;
		}

		tasks = [
			...tasks,
			{
				id: Date.now(),
				name: taskName,
				priority
			}
		];

		taskName = "";
		priority = "Low";
	}

	function deleteTask(id) {
		tasks = tasks.filter(
			(task) => task.id !== id
		);
	}

	function editTask(id) {
		const newName = prompt(
			"Enter new task name:"
		);

		if (!newName) return;

		tasks = tasks.map((task) =>
			task.id === id
				? {
						...task,
						name: newName
				  }
				: task
		);
	}

	async function generateTasks(
		count
	) {
		const generated = [];

		for (
			let i = 1;
			i <= count;
			i++
		) {
			generated.push({
				id: i,
				name: `Task ${i}`,
				priority: "Medium"
			});
		}

		const start =
			performance.now();

		tasks = generated;

		await tick();

		renderTime =
			performance.now() -
			start;
	}

	import { tick } from "svelte";

	function update50Tasks() {
		const start =
			performance.now();

		tasks = tasks.map(
			(task, index) => {
				if (index < 50) {
					return {
						...task,
						priority:
							"High"
					};
				}

				return task;
			}
		);

		updateTime =
			performance.now() -
			start;
	}

	function delete50Tasks() {
		const start =
			performance.now();

		tasks = tasks.slice(50);

		deleteTime =
			performance.now() -
			start;
	}

	function getMemoryUsage() {
		if (performance.memory) {
			return (
				performance.memory
					.usedJSHeapSize /
				1024 /
				1024
			).toFixed(2);
		}

		return "Not Supported";
	}
</script>

<h1>
	Todo Benchmark Application
</h1>

<input
	bind:value={taskName}
	placeholder="Task Name"
/>

<select bind:value={priority}>
	<option>Low</option>
	<option>Medium</option>
	<option>High</option>
</select>

<button on:click={addTask}>
	Add Task
</button>

<hr />

<button
	on:click={() =>
		generateTasks(100)}
>
	Generate 100 Tasks
</button>

<button
	on:click={() =>
		generateTasks(500)}
>
	Generate 500 Tasks
</button>

<button
	on:click={() =>
		generateTasks(1000)}
>
	Generate 1000 Tasks
</button>

<button
	on:click={update50Tasks}
>
	Update 50 Tasks
</button>

<button
	on:click={delete50Tasks}
>
	Delete 50 Tasks
</button>

<p>
	Render Time:
	{renderTime.toFixed(2)}
	ms
</p>

<p>
	Update Time:
	{updateTime.toFixed(2)}
	ms
</p>

<p>
	Delete Time:
	{deleteTime.toFixed(2)}
	ms
</p>

<p>
	Memory:
	{getMemoryUsage()} MB
</p>

{#if tasks.length === 0}
	<p>No tasks available.</p>
{:else}
	<ul>
		{#each tasks as task}
			<li>
				<strong>
					{task.name}
				</strong>
				-
				{task.priority}

				<button
					on:click={() =>
						editTask(
							task.id
						)}
				>
					Edit
				</button>

				<button
					on:click={() =>
						deleteTask(
							task.id
						)}
				>
					Delete
				</button>
			</li>
		{/each}
	</ul>
{/if}